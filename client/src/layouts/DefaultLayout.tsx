import { Header, Authenticate } from "@/components/commons";
import { useAuth } from "@/hooks";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  isPrivate: boolean;
}

const DefaultLayout: FC<Props> = ({ children, isPrivate }) => {
  const { user } = useAuth();

  if (
    (isPrivate && user === null) ||
    (isPrivate && user === undefined)
  ) {
    return <Authenticate />;
  }

  return (
    <>
      <Header />
      <main className="grow mt-14 h-notHeader bg-space dark:bg-spaceDark">
        {children}
      </main>
    </>
  );
};

export default DefaultLayout;
