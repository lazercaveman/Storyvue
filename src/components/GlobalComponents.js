/**
 *
 * Components which are registered within the global.js file can be used globaly without having to import these
 *
 * CAUTION: only register atoms, which can and will be used all over the application!
 *       more information on why this is can be found here: https://vueschool.io/lessons/global-vs-local-components
 */

import H1 from '@/components/atoms/text/H1.vue';
import H2 from '@/components/atoms/text/H2.vue';
import H3 from '@/components/atoms/text/H3.vue';
import ListItem from '@/components/atoms/text/ListItem.vue';
import Paragraph from '@/components/atoms/text/Paragraph.vue';
import Link from '@/components/atoms/text/Link.vue';
import RouterLink from '@/components/atoms/text/RouterLink.vue';

import Button from '@/components/atoms/form/Button.vue';
import Input from '@/components/atoms/form/Input.vue';
import Select from '@/components/atoms/form/Select.vue';
import Textarea from '@/components/atoms/form/Textarea.vue';
import Img from '@/components/atoms/embeding/Img.vue';

import GridContainer from '@/components/atoms/sectioning/GridContainer.vue';

export default {
  H1,
  H2,
  H3,
  ListItem,
  Paragraph,
  Link,
  RouterLink,

  Button,
  Input,
  Select,
  Textarea,
  Img,

  GridContainer,
};
