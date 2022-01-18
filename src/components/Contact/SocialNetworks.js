import React from 'react';
import { nanoid } from 'nanoid';
import { LinkedinIcon, GithubIcon, EmailIcon } from '../../components/common/icons';

export const socialNetworks = [
  {
    id: nanoid(),
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/charlotte-cameron-dev/',
    icon: <LinkedinIcon color="white" boxSize={10} />,
    x: '45%',
    y: '0%',
  },
  {
    id: nanoid(),
    name: 'github',
    url: 'https://github.com/charlotte-l',
    icon: <GithubIcon color="white" boxSize={10} />,
    x: '65%',
    y: '35%',
  },
  {
    id: nanoid(),
    name: 'email',
    url: 'mailto:cel.cameron@protonmail.com',
    icon: <EmailIcon color="white" boxSize={10} />,
    x: '85%',
    y: '10%',
  },
];
