import { ActivityIndicator, View } from 'react-native';
import PropTypes from 'prop-types';

function ScreenLayout({ loading, children }) {
  console.log(loading);
  return (
    <View
      style={{
        backgroundColor: 'black',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {loading ? <ActivityIndicator color="white" /> : children}
    </View>
  );
}

ScreenLayout.prototype = {
  loading: PropTypes.bool.isRequired,
  //   children: PropTypes.string.isRequired,
};

export default ScreenLayout;
