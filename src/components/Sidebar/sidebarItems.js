import {
  Home as HomeIcon,
  Inventory as InventoryIcon,
  Category as CategoryIcon,
  ShoppingCart as OrderIcon,
  Store as StoreIcon
} from '@mui/icons-material';

export const sidebarItems = [
  {
    title: 'Dashboard',
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
  }
];
