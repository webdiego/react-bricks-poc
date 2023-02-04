import React, { Children } from 'react';
import { Text, RichText, Image, types } from 'react-bricks/frontend';
import { motion } from 'framer-motion';
//=============================
// Local Types
//=============================
type TextColor = 'text-red-200' | 'text-blue-200';

interface BannerProps {
  title: string;
  textColor: TextColor;
}

//=============================
// Component to be rendered
//=============================
const Banner: types.Brick<BannerProps> = ({ title, textColor }) => {
  return (
    <div className="p-5">
      <Text
        placeholder="Title.."
        propName="title"
        renderBlock={({ children }) => (
          <h1 className={`text-2xl font-bold ${textColor} `}>{children}</h1>
        )}
      />
      <Text
        placeholder="Subtitle.."
        propName="subtitle"
        renderBlock={({ children }) => (
          <motion.h3
            initial={{ x: -1 }}
            animate={{ x: 50 }}
            className="text-lg font-bold text-gray-800"
          >
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
      label: 'Text-color',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: 'text-red-200', label: 'red ' },
          { value: 'text-blue-200', label: 'blue' },
        ],
      },
    },
  ],
};

export default Banner;
