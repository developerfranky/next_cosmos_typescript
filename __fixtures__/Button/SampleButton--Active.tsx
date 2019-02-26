import * as React from 'react'
import SampleButton from '../../components/SampleButton'

export default {
  component: SampleButton,
  props: {
    text: 'Click Me!',
    onClick: () => alert('Clicked!'),
  }
};

