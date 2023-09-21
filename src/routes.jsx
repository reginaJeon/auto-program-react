import { Home, Profile, Programs, QnA, Contact, Detail, QnADetail, SignIn } from "@/pages";
import {
  HomeIcon,
  UserCircleIcon,
  SunIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  DocumentTextIcon,
  BookmarkSquareIcon
} from "@heroicons/react/24/solid";

export const routes = [
  {
    icon: HomeIcon,
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    icon: UserCircleIcon,
    name: "profile",
    path: "/profile",
    element: <Profile />,
  },
  // {
  //   icon: ArrowRightOnRectangleIcon,
  //   name: "Sign In",
  //   path: "/sign-in",
  //   element: <SignIn />,
  // },
  {
    icon: UserPlusIcon,
    name: "contact",
    path: "/contact",
    element: <Contact />,
  },
  // {
  //   icon: DocumentTextIcon,
  //   name: "Docs",
  //   href: "https://www.material-tailwind.com/docs/react/installation",
  //   target: "_blank",
  //   element: "",
  // },
  {
    icon: SunIcon,
    name: "programs",
    path: "/programs",
    element: <Programs />
  },
  {
    icon: BookmarkSquareIcon,
    name: "qnA",
    path: "/qnA",
    element: <QnA />
  },
  {
    icon: BookmarkSquareIcon,
    name: "detail",
    path: "/detail",
    element: <Detail />
  },
  {
    icon: BookmarkSquareIcon,
    name: "qna-detail",
    path: "/qna-detail",
    element: <QnADetail />
  },
];

export default routes;
