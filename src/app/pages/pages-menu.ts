import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Customer List',
    icon: 'fa fa-users',
    link: '/pages/customers',
    home: true,
  },
  {
    title: 'Training library',
    icon: 'fa fa-list-ul',
    link: '/pages/traininglibs',
  },

  {
    title: 'How To',
    icon: 'fa fa-commenting-o',
    link: '/pages/howto',
  },  
  {
    title: 'FAQ',
    icon: 'fa fa-question-circle-o',
    link: '/pages/faq',
  },
  {
    title: 'Profile page',
    icon: 'fa fa-user-o',
    link: '/pages/profiles',
  },
  {
    title: 'Subscriptions',
    icon: 'fa fa-clipboard',
    link: '/pages/subscriptions',
    children: [
      {
        title: 'Purchase Training',
        link: '/pages/subscriptions/purchase'        
      },
      {
        title: 'Allowed Training',
        link: '/pages/subscriptions/allowedtraining'        
      },
      {
        title: 'Budget',
        link: '/pages/subscriptions/budget'        
      }            
    ]
  },
  {
    title: 'User list',
    icon: 'fa fa-address-book-o',
    link: '/pages/userlist'
  },
  {
    title: 'Invoices list',
    icon: 'fa fa-dollar-sign',
    link: '/pages/invoices'
  },
  {
    title: 'Trainings',
    icon: 'fa fa-list-ul',
    link: '/pages/trainings'
  },
  {
    title: 'Certificates',
    icon: 'fa fa-certificate',
    link: '/pages/certificates'
  }
];


