import { Header, Authenticate } from "@/components/commons";
import { useAuth } from "@/hooks";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  isPrivate: boolean;
}

const DefaultLayout: FC<Props> = ({ children, isPrivate }) => {
  const { isLoading, user } = useAuth();

  if (isLoading) {
    return <div className="w-screen h-screen bg-space dark:bg-spaceDark"></div>;
  }

  if (
    (isPrivate && user === null && !isLoading) ||
    (isPrivate && user === undefined && !isLoading)
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
