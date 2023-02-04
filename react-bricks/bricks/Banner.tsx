import React, { Children } from 'react';
import { Text, RichText, Image, types } from 'react-bricks/frontend';
import { motion } from 'framer-motion';
//=============================
// Local Types
//=============================
type TextColor = 'text-red-200' | 'text-blue-200';
type FontSize = 'text-sm lg:text-md' | 'text-lg lg:text-2xl';

interface BannerProps {
  title: string;
  textColor: TextColor;
  fontSizeTitle: FontSize;
}

//=============================
// Component to be rendered
//=============================
const Banner: types.Brick<BannerProps> = ({ title, textColor, fontSizeTitle }) => {
  return (
    <div className="p-5">
      <Text
        placeholder="Title.."
        propName="title"
        renderBlock={({ children }) => (
          <h1 className={`${fontSizeTitle} font-bold ${textColor} `}>{children}</h1>
        )}
      />
      <Text
        placeholder="Subtitle.."
        propName="subtitle"
        renderBlock={({ children }) => (
          <motion.h3 initial={{ x: -1 }} animate={{ x: 50 }} className={` font-bold text-gray-800`}>
            {children}
          </motion.h3>
        )}
      />
      <RichText
        placeholder="Description.."
        propName="description"
        renderBlock={({ children }) => <p className="text-sm text-blue-600">{children}</p>}
      />
    </div>
  );
};

//=============================
// Brick Schema
//=============================
Banner.schema = {
  name: 'banner-unit',
  label: 'Banner Unit',
  category: 'Banner',
  tags: ['banner', 'unit'],
  getDefaultProps: () => ({
    textColor: 'text-red-200',
    title: 'Banner title',
    subtitle: 'Banner subtitle',
    description: 'Banner description',
  }),
  sideEditProps: [
    {
      name: 'textColor',
      label: 'Title color',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: 'text-red-200', label: 'red ' },
          { value: 'text-blue-200', label: 'blue' },
        ],
      },
    },
    {
      name: 'fontSizeTitle',
      label: 'Font size title',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: 'text-sm lg:text-md', label: 'mobile:sm - desktop:md' },
          { value: 'text-lg lg:text-2xl', label: 'mobile:lg - desktop:2xl' },
        ],
      },
    },
  ],
};

export default Banner;
