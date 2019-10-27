import IconList from './assets/icons/list.png';
import IconListSelected from './assets/icons/list-selected.png';
import IconAdd from './assets/icons/add.png';
import IconAddSelected from './assets/icons/add-selected.png';
import IconProfile from './assets/icons/profile.png';
import IconProfileSelected from './assets/icons/profile-selected.png';

export const colors = [
  'rgba(74,144,226,1)',
  'rgba(126,211,33,1)',
  'rgba(208,2,27,1)',
  'rgba(189,16,224,1)',
  'rgba(245,166,35,1)',
];

export const tabBarIcons = {
  inactive: {
    Feed: IconList,
    Add: IconAdd,
    Profile: IconProfile,
  },
  active: {
    Feed: IconListSelected,
    Add: IconAddSelected,
    Profile: IconProfileSelected,
  },
};
