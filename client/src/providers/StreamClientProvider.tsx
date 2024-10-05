'use client';
import {useUserContext} from '@/app/context/Userinfo'
import { ReactNode, useEffect, useState } from 'react';
import { StreamVideoClient, StreamVideo } from '@stream-io/video-react-sdk';


import  tokenProvider  from '../../actions/stream.actions';
import Loader from '@/app/component/Loader';

const API_KEY = process.env.NEXT_PUBLIC_STREAM_API_KEY;

const StreamVideoProvider = ({ children }: { children: ReactNode }) => {
  const [videoClient, setVideoClient] = useState<StreamVideoClient>();

  const { contextisLoggedIn,contextimg,contextname ,contextemail} = useUserContext();

  useEffect(() => {
    if (!contextisLoggedIn) return;
    if (!API_KEY) throw new Error('Stream API key is missing');

    const client = new StreamVideoClient({
      apiKey: API_KEY,
      user: {
        id: contextemail,
        name: contextname,
        image: contextimg,
      },
      tokenProvider,
    });

    setVideoClient(client);
  }, [contextisLoggedIn]);

  if (!videoClient) return <Loader />;

  return <StreamVideo client={videoClient}>{children}</StreamVideo>;
};

export default StreamVideoProvider;
