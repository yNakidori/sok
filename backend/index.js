require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ ok: true, message: "Backend running" });
});

app.post("/api/auth/register", async (req, res) => {
  try {
    const { email, username, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    const existing = await prisma.user
      .findUnique({ where: { email } })
      .catch(() => null);
    if (existing) {
      return res.status(409).json({ error: "Email já cadastrado" });
    }

    // Ensure a company exists (use first or create default)
    let company = await prisma.company.findFirst();
    if (!company) {
      company = await prisma.company.create({
        data: { name: "Default Company" },
      });
    }

    // Ensure a role exists
    let role = await prisma.role.findFirst();
    if (!role) {
      role = await prisma.role.create({ data: { name: "User" } });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name: username || email.split("@")[0],
        email,
        passwordHash,
        companyId: company.id,
        roleId: role.id,
      },
      select: { id: true, name: true, email: true },
    });

    return res.status(201).json({ user });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Backend listening on ${port}`));
