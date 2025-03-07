
import React from 'react';

export const generateTownFeaturedProjects = (townName: string) => {
  // Featured project images specific to this town
  return [
    {
      image: "/lovable-uploads/590d1c5f-1242-4641-8775-d67442eb5985.png",
      title: "Blue Sports Car Wrap",
      description: `Complete color change wrap in ${townName}`,
    },
    {
      image: "/lovable-uploads/da66fc1b-34ee-4085-b73c-49b58773faf2.png",
      title: "Custom Green Design",
      description: `Custom graphics for a local ${townName} business`,
    },
    {
      image: "/lovable-uploads/b74857d0-710d-4089-9183-4df0575dc986.png",
      title: "Commercial Fleet Branding",
      description: `Fleet branding solution for ${townName} company`,
    }
  ];
};
