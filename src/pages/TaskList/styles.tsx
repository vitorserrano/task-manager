import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
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
