import { createHashRouter, RouteObject } from "react-router-dom";
import { RootLayout, RootErrorElement } from "./app/pages/_layout";
import PortfolioWrap from "./app/index";
import Home from "./app/pages/Home/home";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <RootErrorElement />,
    children: [
      {
        index: true,
        element: (
          <PortfolioWrap>
            <Home />
          </PortfolioWrap>
        ),
      },
      {
        path: "/ProfessionalExperience",
        lazy: async () => {
          const { default: ProfessionalExp } = await import(
            "./app/pages/Home/components/ProfessionalExp/ProfessionalExp"
          );
          return {
            Component: () => (
              <PortfolioWrap>
                <ProfessionalExp />
              </PortfolioWrap>
            ),
          };
        },
      },
      {
        path: "/achievements",
        lazy: async () => {
          const { default: Achievement } = await import(
            "./app/pages/Home/components/Achievement/Achievement"
          );
          return {
            Component: () => (
              <PortfolioWrap>
                <Achievement />
              </PortfolioWrap>
            ),
          };
        },
      },
      {
        path: "/contact",
        lazy: async () => {
          const { default: Contacts } = await import(
            "./app/pages/Home/components/ContactForm/ContactForm"
          );
          return {
            Component: () => (
              <PortfolioWrap>
                <Contacts />
              </PortfolioWrap>
            ),
          };
        },
      },
    ],
  },
];

export const router = createHashRouter(routes);
