import * as React from 'react'

interface Props {
  url: string,
  width: string,
}

const SampleImage: React.SFC<Props> = ({url, width}) => (
  <img src={url} alt="" style={{ width: width }} />
)

export default SampleImage
