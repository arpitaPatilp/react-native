import { View,FlatList, StyleSheet } from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

function renderMealItem(itemData){
  const item=itemData.item;
  const mealItemProp={
    title:item.title,
    imageUrl:item.imageUrl,
    duration:item.duration,
    complexity:item.complexity,
    isVegetarian:item.isVegetarian
  }
  return <MealItem {...mealItemProp}/>;
}

function MealsOverviewScreen({ route }) {
  const catId = route.params.categoryId;
  
  const displayedMeal=MEALS.filter((item)=>{
      return item.categoryIds.indexOf(catId)>=0;
  });
  
  return (
    <View style={styles.container}>
      <FlatList data={displayedMeal} keyExtractor={(item)=>item.id} renderItem={renderMealItem}/>
    </View>
  );
}
export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginBottom:16
  },
});
