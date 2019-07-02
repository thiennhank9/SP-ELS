import { ELSCommonConfig } from '@els/meded-ui-common-react';
import {chapterEpics} from './ChapterEpics';

const epicRegistries = [
  ...Object.values(chapterEpics)
];

const epicNames = {};
epicRegistries.forEach(epicFunc => {
  if (!epicNames[epicFunc.name]) {
    epicNames[epicFunc.name] = 1;
  } else {
    epicNames[epicFunc.name] += 1;
  }
});

const duplicatedEpicNames = [];
Object.keys(epicNames).forEach(epicName => {
  if (epicNames[epicName] > 1) {
    duplicatedEpicNames.push(epicName);
  }
});

if (duplicatedEpicNames.length) {
  ELSCommonConfig.getLogger().error(`There are duplicated epic names: ${duplicatedEpicNames.join(', ')}`, 'color: red');
}

export default epicRegistries;
