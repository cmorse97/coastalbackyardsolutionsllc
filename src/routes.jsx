import { Home } from "@/pages";
import {
  HomeIcon,
  PhoneIcon,
  EnvelopeIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/solid";

export const routes = [
  {
    icon: HomeIcon,
    name: "home",
    path: "/",
    href: "#home",
    element: <Home />,
  },
  {
    icon: QuestionMarkCircleIcon,
    name: "about",
    path: "/about",
    href: "#about",
  },
  {
    icon: EnvelopeIcon,
    name: "contact",
    path: "/contact",
    href: "#contact",
  },
  {
    icon: PhoneIcon,
    name: "713-701-5300",
  },
];

export default routes;
