import React from 'react';
import { Icon } from '@iconify/react';
import { snsInfo } from '../../constants';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="text-white">
        <h2 className="text-2xl font-extrabold md:text-4xl">Comfort Zone</h2>
        <span className="md:text-md mt-2 inline-block text-sm font-bold">
          일상에서 겪는 감정들을 공유하고 서로 위로하며 응원하는 공간입니다
        </span>
      </div>
      <div className="grid gap-y-4 md:gap-y-1">
        <a
          href="mailto:tlgud585@gmail.com"
          className="mt-2 text-sm text-white/60 md:text-base"
        >
          Contact: tlgud585@gmail.com
        </a>

        <div className="flex gap-x-2">
          {snsInfo.map(({ iconName, path }) => (
            <a
              href={path}
              key={iconName}
              className="text-white/60 transition-all duration-150 hover:text-white"
            >
              <Icon icon={iconName} width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
