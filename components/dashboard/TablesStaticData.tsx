export type MenuTableItem = {
  id: string;
  item: string;
  category: 'Appetizers' | 'Mains' | 'Desserts' | 'Drinks';
  cost: string;
  price: string;
  margin: number;
  sales: number;
  rating: number;
  status: 'Best Seller' | 'Low Margin';
};

export type OrderTableItem = {
  id: string;
  orderId: string;
  category: string;
  vendor: string;
  amount: string;
  orderDate: string;
  status: 'Delivered' | 'In Transit' | 'Pending';
};

export type RequestTableItem = {
  id: string;
  requestId: string;
  title: string;
  category: 'Food' | 'Staffing' | 'Marketing' | 'Construction' | 'Equipment' | 'Emergency';
  priority: 'high' | 'medium' | 'low';
  status: 'In Progress' | 'Pending' | 'Completed';
  submitted: string;
  assignedTo: string;
};

export type DocumentTableItem = {
  id: string;
  name: string;
  category: 'Invoices' | 'Contracts' | 'Menus' | 'Reports' | 'Certificates';
  type: 'PDF' | 'Excel';
  date: string;
  size: string;
};

export type SupplierComparisonTableItem = {
  id: string;
  currentSupplier: string;
  items: number;
  avgCost: string;
  rating: number;
  alternative: string;
  altCost: string;
  monthlySavings: string;
  actionType: 'menu' | 'button';
};

export type InventoryStockTableItem = {
  id: string;
  item: string;
  supplier: string;
  costPerUnit: string;
  stock: string;
  reorderPoint: string;
  status: 'Normal' | 'Low Stock';
};

export type WeeklyScheduleTableItem = {
  id: string;
  day: string;
  lunchShift: string;
  dinnerShift: string;
  totalStaff: string;
};

export type StaffDirectoryTableItem = {
  id: string;
  name: string;
  role: string;
  shift: string;
  hourlyWage: string;
  weeklyHours: string;
  status: 'Active' | 'Normal';
};

export const menuTableRowsData: MenuTableItem[] = [
  { id: '1', item: 'Grilled Salmon', category: 'Mains', cost: '$8.50', price: '$24.99', margin: 66, sales: 145, rating: 4.8, status: 'Best Seller' },
  { id: '2', item: 'Caesar Salad', category: 'Appetizers', cost: '$3.20', price: '$9.99', margin: 68, sales: 203, rating: 4.6, status: 'Best Seller' },
  { id: '3', item: 'Wagyu Burger', category: 'Mains', cost: '$12.00', price: '$18.99', margin: 37, sales: 98, rating: 4.9, status: 'Low Margin' },
  { id: '4', item: 'Filet Mignon', category: 'Appetizers', cost: '$18.50', price: '$42.99', margin: 57, sales: 187, rating: 4.7, status: 'Best Seller' },
  { id: '5', item: 'Chocolate Lava Cake', category: 'Desserts', cost: '$2.90', price: '$8.99', margin: 68, sales: 67, rating: 4.9, status: 'Best Seller' },
  { id: '6', item: 'Craft Cocktail', category: 'Drinks', cost: '$2.20', price: '$14.00', margin: 84, sales: 240, rating: 4.8, status: 'Best Seller' },
];

export const ordersTableRowsData: OrderTableItem[] = [
  { id: '1', orderId: 'ORD-1234', category: 'Food', vendor: 'Fresh Farms Co', amount: '$1,250.00', orderDate: '4/1/2026', status: 'Delivered' },
  { id: '2', orderId: 'ORD-1235', category: 'Beverage', vendor: "Ocean's Best", amount: '$890.50', orderDate: '3/31/2026', status: 'In Transit' },
  { id: '3', orderId: 'ORD-1236', category: 'Food', vendor: 'Wine Distributors', amount: '$2,100.00', orderDate: '3/30/2026', status: 'Delivered' },
  { id: '4', orderId: 'ORD-1237', category: 'Equipment', vendor: 'Kitchen Supply Pro', amount: '$450.00', orderDate: '3/28/2026', status: 'Pending' },
  { id: '5', orderId: 'ORD-1238', category: 'Supplies', vendor: 'Green Valley', amount: '$680.00', orderDate: '3/27/2026', status: 'Delivered' },
];

export const requestsTableRowsData: RequestTableItem[] = [
  { id: '1', requestId: 'REQ-001', title: 'Replace broken oven', category: 'Equipment', priority: 'high', status: 'In Progress', submitted: '3/30/2026', assignedTo: 'Hosperra Team' },
  { id: '2', requestId: 'REQ-002', title: 'Add vegan menu options', category: 'Food', priority: 'medium', status: 'Pending', submitted: '3/29/2026', assignedTo: 'Menu Team' },
  { id: '3', requestId: 'REQ-003', title: 'Hire weekend bartender', category: 'Staffing', priority: 'low', status: 'Completed', submitted: '3/25/2026', assignedTo: 'HR Team' },
  { id: '4', requestId: 'REQ-004', title: 'Update restaurant logo', category: 'Marketing', priority: 'high', status: 'Pending', submitted: '3/28/2026', assignedTo: 'Design Team' },
  { id: '5', requestId: 'REQ-005', title: 'Fix leaking sink', category: 'Construction', priority: 'medium', status: 'Pending', submitted: '3/28/2026', assignedTo: 'Maintenance' },
];

export const documentsTableRowsData: DocumentTableItem[] = [
  { id: '1', name: 'Invoice_FreshFarms_March2026.pdf', category: 'Invoices', type: 'PDF', date: '3/30/2026', size: '245 KB' },
  { id: '2', name: 'Equipment_Lease_Agreement.pdf', category: 'Contracts', type: 'PDF', date: '3/29/2026', size: '1.2 MB' },
  { id: '3', name: 'Equipment_Lease_Agreement.pdf', category: 'Menus', type: 'PDF', date: '3/25/2026', size: '3.4 MB' },
  { id: '4', name: 'Equipment_Lease_Agreement.pdf', category: 'Reports', type: 'Excel', date: '3/28/2026', size: '456 KB' },
  { id: '5', name: 'Equipment_Lease_Agreement.pdf', category: 'Certificates', type: 'PDF', date: '3/28/2026', size: '198 KB' },
];

export const supplierComparisonRowsData: SupplierComparisonTableItem[] = [
  { id: '1', currentSupplier: 'Fresh Farms Co', items: 1, avgCost: '$4.50', rating: 4.2, alternative: 'Poultry Plus', altCost: '$4.10', monthlySavings: '$ 40', actionType: 'menu' },
  { id: '2', currentSupplier: "Ocean's Best", items: 1, avgCost: '$12.00', rating: 4.8, alternative: '--', altCost: '--', monthlySavings: '--', actionType: 'button' },
  { id: '3', currentSupplier: 'Green Valley', items: 2, avgCost: '$1.85', rating: 4.5, alternative: '--', altCost: '--', monthlySavings: '--', actionType: 'menu' },
];

export const inventoryStockRowsData: InventoryStockTableItem[] = [
  { id: '1', item: 'Chicken Breast', supplier: 'Fresh Farms Co', costPerUnit: '$4.50', stock: '45 lbs', reorderPoint: '30 lbs', status: 'Normal' },
  { id: '2', item: 'Salmon Fillet', supplier: "Ocean's Best", costPerUnit: '$12.00', stock: '18 lbs', reorderPoint: '20 lbs', status: 'Normal' },
  { id: '3', item: 'Ground Beef', supplier: 'Prime Meats', costPerUnit: '$6.80', stock: '67 lbs', reorderPoint: '40 lbs', status: 'Low Stock' },
  { id: '4', item: 'Romaine Lettuce', supplier: 'Green Valley', costPerUnit: '$1.20', stock: '8 heads', reorderPoint: '15 heads', status: 'Normal' },
  { id: '5', item: 'Tomatoes', supplier: 'Green Valley', costPerUnit: '$2.90', stock: '35 lbs', reorderPoint: '20 lbs', status: 'Normal' },
];

export const weeklyScheduleRowsData: WeeklyScheduleTableItem[] = [
  { id: '1', day: 'Monday', lunchShift: '8 staff', dinnerShift: '12 staff', totalStaff: '20 staff' },
  { id: '2', day: 'Tuesday', lunchShift: '8 staff', dinnerShift: '12 staff', totalStaff: '20 staff' },
  { id: '3', day: 'Wednesday', lunchShift: '7 staff', dinnerShift: '11 staff', totalStaff: '18 staff' },
  { id: '4', day: 'Thursday', lunchShift: '7 staff', dinnerShift: '11 staff', totalStaff: '18 staff' },
  { id: '5', day: 'Friday', lunchShift: '7 staff', dinnerShift: '11 staff', totalStaff: '18 staff' },
  { id: '6', day: 'Saturday', lunchShift: '7 staff', dinnerShift: '11 staff', totalStaff: '18 staff' },
  { id: '7', day: 'Sunday', lunchShift: '7 staff', dinnerShift: '11 staff', totalStaff: '18 staff' },
];

export const staffDirectoryRowsData: StaffDirectoryTableItem[] = [
  { id: '1', name: 'John Smith', role: 'Head Chef', shift: 'Lunch & Dinner', hourlyWage: '$28.50/hr', weeklyHours: '54.50', status: 'Active' },
  { id: '2', name: 'Maria Garcia', role: 'Sous Chef', shift: 'Dinner', hourlyWage: '$22.00/hr', weeklyHours: '52.00', status: 'Active' },
  { id: '3', name: 'David Lee', role: 'Line Cook', shift: 'Lunch', hourlyWage: '$18.00/hr', weeklyHours: '56.80', status: 'Normal' },
  { id: '4', name: 'Sarah Johnson', role: 'Line Cook', shift: 'Dinner', hourlyWage: '$18.00/hr', weeklyHours: '51.20', status: 'Normal' },
  { id: '5', name: 'Mike Brown', role: 'Prep Cook', shift: 'Morning', hourlyWage: '$16.00/hr', weeklyHours: '52.90', status: 'Normal' },
];
