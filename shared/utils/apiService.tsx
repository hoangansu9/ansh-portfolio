import axios from 'axios';
import { Company, PersonalDetails, Project } from './types';

export const BASE_URL = `${process.env.BASE_URL}/api` || 'https://harshgoel.me/api';

export async function getPersonalDetails(): Promise<PersonalDetails | boolean> {
  return {
    name: 'Sử Hoàng Ân',
    logo: '/images/logo.png',
    about: "I'm a full stack developer who crafts beautiful web-apps, chrome extensions and apps.",
    socialMedia: [
      {
        link: 'https://www.facebook.com/hoangansu9',
        image_file: '/images/facebook.png',
        alt_text: 'Facebook'
      },
      {
        link: 'https://www.instagram.com/hoangansu9',
        image_file: '/images/instagram.png',
        alt_text: 'Instagram'
      }
    ],
    work: {
      company: 'Facebook',
      designation: 'Software Engineer',
      logo: '/images/facebook.png'
    },
    resume: '/images/resume.pdf',
    profile_img: '/images/profile.png',
    calendyUrl: 'https://calendar.app.google/PAkrFWvVtFgXCeFJ6'
  };
}

export async function getProjectDetails(): Promise<Project[] | boolean> {
  return [
    {
      slug: 'project-1',
      tagline: 'Tagline 1',
      description: 'Description 1',
      img: '/images/project1.png',
      name: 'Project 1',
      tags: ['Tag 1', 'Tag 2'],
      github: 'https://github.com/project1',
      category: ['Category 1', 'Category 2'],
      featured: true
    }
  ];
}
export async function getCompanyDetails(): Promise<Company[] | boolean> {
  try {
    const { data } = await axios.get(`${BASE_URL}/companies`);
    return data;
  } catch (err) {
    return false;
  }
}

export async function getGithubDetails(): Promise<unknown> {
  try {
    const { data } = await axios.get(`https://api.github.com/repos/harshgoel05/another-portfolio`);
    return data;
  } catch (err) {
    return false;
  }
}
