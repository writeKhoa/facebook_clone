import { PageProps, PostProps, ShortProfileItem } from "@/models";
import {
  Main,
  Complementary,
  HomeNavigation,
} from "@/components/perpages/Home";
import { useEffect, useState } from "react";
import { CustomScrollbar } from "@/components/commons";
import { useAuth } from "@/hooks";

const Home: PageProps = () => {
  const { makeRequestWithAuth } = useAuth();
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [contacts, setContacts] = useState<ShortProfileItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const abortController: AbortController | null = new AbortController();
    const getData = async () => {
      try {
        setIsLoading(true);
        const data = await makeRequestWithAuth(
          "get",
          "/api/v1/home/?page_idx=1&page_size=10",
          {},
          {
            signal: abortController?.signal,
          }
        );
        setPosts([...data.__posts]);

        const newContacts = data.__contacts.map((contact: any) => {
          const { friendId } = contact;
          return { ...friendId };
        });
        setContacts(newContacts);
      } catch (error) {
        console.log({ error });
      } finally {
        setIsLoading(false);
      }
    };
    document.title = "Facebook";
    getData();
    return () => {
      abortController.abort();
    };
  }, []);
  return (
    <div className="flex relative bg-space dark:bg-spaceDark">
      <div className="sticky top-14 left-0 shrink basis-[360px] min-w-[280px] h-notHeader max1075:hidden transition-all">
        <CustomScrollbar>
          <HomeNavigation />
        </CustomScrollbar>
      </div>

      <div className="mx-auto grow basis-[744px]">
        <div className="w-full px-8 mx-auto py-2">
          {isLoading ? <></> : <Main postsProps={posts} />}
        </div>
      </div>

      <div className="sticky top-14 right-0 shrink basis-[360px] min-w-[280px] h-notHeader max900:hidden">
        <CustomScrollbar>
          <Complementary contactsProps={contacts} />
        </CustomScrollbar>
      </div>
    </div>
  );
};
export default Home;
