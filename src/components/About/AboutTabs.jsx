import { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";

import AboutInfo from "./AboutInfo";
import ContactInfo from "./ContactInfo";
import UserManual from "./UserManual";

const AboutTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Box>
      <Tabs
        value={activeTab}
        onChange={(_, newValue) => setActiveTab(newValue)}
        variant="fullWidth"
      >
        <Tab
          icon={<InfoOutlinedIcon />}
          iconPosition="start"
          label="Sobre"
        />
        <Tab
          icon={<ContactMailOutlinedIcon />}
          iconPosition="start"
          label="Contato"
        />
        <Tab
          icon={<MenuBookOutlinedIcon />}
          iconPosition="start"
          label="Manual"
        />
      </Tabs>

      <Box sx={{ mt: 3 }}>
        {activeTab === 0 && <AboutInfo />}
        {activeTab === 1 && <ContactInfo />}
        {activeTab === 2 && <UserManual />}
      </Box>
    </Box>
  );
};

export default AboutTabs;
