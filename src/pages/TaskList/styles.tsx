import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },

  container: {
    flex: 1,
    backgroundColor: '#7750fc',
  },

  header: {
    backgroundColor: '#7750fc',
    marginTop: 15,
    marginBottom: 30,
    marginHorizontal: 20,
  },

  headerTitle: {
    fontSize: 20,
    color: '#fdfdfd',
    fontWeight: 'bold',
  },

  statusButtonGroup: {
    marginTop: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  statusButton: {
    backgroundColor: '#fff',
    width: 115,
    height: 120,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  statusButtonIcon: {
    backgroundColor: '#F5F7FB',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },

  statusButtonText: {
    color: '#6C6C80',
    marginTop: 12,
  },

  list: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    paddingHorizontal: 20,
  },

  listTitle: {
    color: '#322153',
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 28,
  },

  listDescription: {
    marginTop: 8,
    color: '#6C6C80',
    fontSize: 16,
    marginBottom: 30,
  },

  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F7FB',
    paddingHorizontal: 20,
    borderRadius: 8,
    paddingVertical: 20,
    marginBottom: 10,
  },

  listIcon: {
    backgroundColor: '#eae6f7',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50 / 2,
  },

  listText: {
    color: '#6C6C80',
    fontSize: 16,
    marginLeft: 10,
  },

  buttonGroup: {
    flexDirection: 'row',
  },

  overlay: {
    width: 350,
  },

  overlayTitle: {
    color: '#322153',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },

  overlayInput: {
    backgroundColor: '#F5F7FB',
    height: 60,
    marginVertical: 20,
    paddingHorizontal: 14,
    borderRadius: 6,
  },

  overlayButton: {
    flexDirection: 'row',
    marginTop: 20,
    backgroundColor: '#7750fc',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },

  overlayButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },

  fabButton: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#7750fc',
    bottom: 10,
    right: 10,
  },

  leftAction: {
    backgroundColor: '#34CB79',
    flex: 1,
    justifyContent: 'center',
    marginBottom: 10,
    padding: 20,
    borderRadius: 8,
  },

  rightAction: {
    backgroundColor: '#f45',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginBottom: 10,
    padding: 20,
    borderRadius: 8,
  },
});

export default styles;
