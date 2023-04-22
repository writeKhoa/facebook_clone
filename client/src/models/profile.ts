import { ShortProfileItem } from '@/models';
export interface ProfileProps {
  _id: string;
  fullName: string;

  avatarUrl: string;
  mediumAvatarUrl: string;
  backgroundUrl: string;


  friends: {
    friendList: ShortProfileItem[],
    friendCount: number
  }
  
  imageUrlList: { imgUrl: string, postId: string }[]

}
