import {
  Home as HomeIcon,
  Inventory as InventoryIcon,
  Category as CategoryIcon,
  ShoppingCart as OrderIcon,
  Store as StoreIcon,
  People as PeopleIcon
} from '@mui/icons-material';

export const sidebarItems = [
  {
    title: 'Home',
    path: '/app/home',
    icon: HomeIcon
  },
  {
    title: 'Estoque',
    path: '/app/estoque',
    icon: InventoryIcon
  },
  {
    title: 'Produtos',
    path: '/app/produtos',
    icon: CategoryIcon
  },
  {
    title: 'Pedidos',
    path: '/app/pedidos',
    icon: OrderIcon
  },
  {
    title: 'Unidades',
    path: '/app/unidades',
    icon: StoreIcon
  },
  {
    title: 'Operadores',
    path: '/app/operadores',
    icon: PeopleIcon
  },
  
];
