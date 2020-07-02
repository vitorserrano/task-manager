import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: 10,
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
    color: '#eeee',
    fontWeight: 'bold',
  },

  statusButtonGroup: {
    marginTop: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  statusButton: {
    backgroundColor: '#fdfdfd',
    width: 118,
    height: 130,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },

  statusButtonIcon: {
    backgroundColor: '#eeee',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },

  statusButtonText: {
    color: '#333',
    marginTop: 12,
  },

  list: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    paddingHorizontal: 20,
  },

  listTitle: {
    color: '#333',
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 28,
  },

  listDescription: {
    marginTop: 8,
    color: '#666',
    fontSize: 16,
    marginBottom: 30,
  },

  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#eeee',
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 10,
  },

  buttonGroup: {
    flexDirection: 'row',
  },

  overlay: {
    width: 300,
  },

  fabButton: {
    position: 'absolute',    
    alignItems: 'center',
    justifyContent: 'center',                                      
    width: 60,  
    height: 60,   
    borderRadius: 30,            
    backgroundColor: '#34CB79',                                    
    bottom: 10,                                                    
    right: 10, 
  },
});

export default styles;
