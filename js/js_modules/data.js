import {getRandomInteger} from './utils.js';

const names = [
  'Артём',
  'Марина',
  'Сергей',
  'Антон',
  'Слава',
  'Ира',
];
const messages = [
  'Всё  отлично!',
  'В  целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];


const createComment = (_, index) => {
  const randomNamesIndex = getRandomInteger(0, names.length - 1);
  const randomMessageIndex = getRandomInteger(0, messages.length - 1);
  return {
    id: index + 1,
    avatar: `img/avatar${index + 1}.svg`,
    message: messages[randomMessageIndex],
    name: names[randomNamesIndex],
  };
};
export {createComment};
