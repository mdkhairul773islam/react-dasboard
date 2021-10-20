import Icon from "awesome-react-icons";
const sideBarItem = [
  {
    title: "Dashboard",
    itemId: "/admin",
    elemBefore: () => <Icon name="inbox" />,
  },
  {
    title: "Purchase",
    itemId: 0,
    elemBefore: () => <Icon name="users" />,
    subNav: [
      {
        title: "New",
        itemId: "/purchase/add",
        //elemBefore: () => <Icon name="cloud-snow" />,
      },
      {
        title: "All",
        itemId: "/purchase/all",
      },
    ],
  },
  {
    title: "Sale",
    itemId: 1,
    elemBefore: () => <Icon name="users" />,
    subNav: [
      {
        title: "New",
        itemId: "/sale/add",
      },
      {
        title: "All",
        itemId: "/sale/all",
      },
    ],
  },
];

export default sideBarItem;
