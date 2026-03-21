export const MENU_SECTIONS = [
  {
    title: 'Base',
    legend: 'Choose your base',
    name: 'base',
    type: 'radio',
    options: [
      { value: 'rice', label: 'Rice' },
      { value: 'noodles', label: 'Noodles' },
    ],
  },
  {
    title: 'Protein',
    legend: 'Choose your protein',
    name: 'protein',
    type: 'radio',
    options: [
      { value: 'chicken', label: 'Chicken' },
      { value: 'tofu', label: 'Tofu' },
    ],
  },
  {
    title: 'Toppings',
    legend: 'Choose your toppings',
    name: 'toppings',
    type: 'checkbox',
    options: [
      {
        value: 'avocado',
        label: 'Avocado',
        upcharge: {
          label: '+$2',
          announcement: 'Upcharge of $2.00',
        },
      },
    ],
  },
  {
    title: 'Sauce',
    legend: 'Choose your sauce',
    name: 'sauce',
    type: 'checkbox',
    options: [
      { value: 'spicy-mayo', label: 'Spicy Mayo' },
    ],
  },
];