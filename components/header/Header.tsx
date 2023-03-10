'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { Button } from '..';

interface User {
  name: string;
  profileImg: string;
}

const Header = () => {
  const [user, setUser] = useState<User | null>({
    name: 'Jane Doe',
    profileImg:
      'https://res.cloudinary.com/dz6bdal71/image/upload/v1673463893/profile_2_uyllpy.png',
  });
  const onLogin = () => {
    console.log('hi');
  };
  const onCreateAccount = () => {
    console.log('hi');
  };
  const onLogout = () => {
    console.log('hi');
    setUser(null);
  };

  return (
    <header>
      <div className="header">
        <div>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block align-top"
          >
            <g fill="none" fillRule="evenodd">
              <path
                d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
                fill="#FFF"
              />
              <path
                d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
                fill="#555AB9"
              />
              <path
                d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"
                fill="#91BAF8"
              />
            </g>
          </svg>
          <h1 className="md:text-2x my-1.5 ml-2.5 inline-block text-xl font-extrabold leading-[1]">
            Comfort Zone
          </h1>
        </div>
        <div className="flex gap-x-2">
          {user && (
            <>
              <Image
                src={user.profileImg}
                alt="profile"
                width={32}
                height={32}
                className="block rounded-full"
              />
              <Button size="small" onClick={onLogout} label="Log out" />
            </>
          )}
          {!user && (
            <>
              <Button size="small" onClick={onLogin} label="Log in" />
              <Button
                primary
                size="small"
                onClick={onCreateAccount}
                label="Sign up"
              />
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
