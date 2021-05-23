// screens/InboxScreen.js
import * as React from 'react';
import { connect } from 'react-redux';
import PureInboxScreen from '../components/PureInboxScreen';

type Props = {
    error: string | null,
}

const InboxScreen:React.FunctionComponent<Props> = (props) => {
  return <PureInboxScreen error={props.error} />;
};

export default connect((props: Props) => ({ error: props.error }))(InboxScreen);