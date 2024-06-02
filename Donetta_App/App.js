import React from "react";
import { StyleSheet, Image, Text, View, ScrollView, TextInput, Button, FlatList, SafeAreaView } from "react-native";

export default function Task() {
  const tasks = [
    { id: '1', title: 'Go for a run' },
    { id: '2', title: 'Mobile App Development' },
    { id: '3', title: 'Finish Coding Assignment' },
    { id: '4', title: 'Read "Good Life"' },
    { id: '5', title: 'Make mashed potatoes' },
    { id: '6', title: 'Grocery Shopping' },
    { id: '7', title: 'Clean the bedrooms' },
    { id: '8', title: 'Bake cookies' },
    { id: '9', title: 'Organize closet' },
    { id: '10', title: 'Travel to Maldives' },
    { id: '11', title: 'Study for Exams' },
    { id: '12', title: 'Jog around town' },
    { id: '13', title: 'Buy jewelry' },
    { id: '14', title: 'Yoga' },
    { id: '15', title: 'JavaScript' },
  ];

  const categories = [
    { id: '1', title: 'Exercise', tasks: '3 Tasks', image: 'data:image/png;base64,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' },
    { id: '2', title: 'Study', tasks: '2 Tasks', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgVYmdJ9B1q7CBWjMosl922xuFR_lqH_Nh9A&s' },
    { id: '3', title: 'Code', tasks: '2 Tasks', image: 'data:image/jpeg;base64,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' },
    { id: '4', title: 'Cook', tasks: '2 Tasks', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjIxbr353Puna5EXtTcgbsGljNz40qmrWTIQ&s' },
    { id: '5', title: 'Clean', tasks: '2 Tasks', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrOSAcm-wdYkN0npqe4M4m8K--42B0nsRRUQ&s' },
    { id: '6', title: 'Read', tasks: '1 Task', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp1wX2l_Ye__f6Sk4ZJyb6z3rWaGduoAPjFw&s' },
    { id: '7', title: 'Travel', tasks: '1 Task', image: 'https://cdn0.iconfinder.com/data/icons/travel-442/128/2-512.png' },
    { id: '8', title: 'Shopping', tasks: '2 Tasks', image: 'data:image/jpeg;base64,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' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.Task}>
        <View style={styles.Frame1}>
          <View style={styles.Group1}>
            <Text style={styles.Welcome}>Welcome :)</Text>
            <Text style={styles._15TasksToday}>15 tasks today</Text>
          </View>
          <Image
            style={styles.ProfileImage}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRchNOQarbjmtb4x_sFAr1dfKN3bLy5I0BSsg&s",
            }}
          />
        </View>
        <View style={styles.Search3}>
          <View style={styles.SearchBox}>
            <View style={styles.Group6}>
              <View style={styles.Group5}>
                <Image
                  style={styles.MynauiSearch}
                  source={{
                    uri: "https://static.thenounproject.com/png/101791-200.png",
                  }}
                />
                <TextInput style={styles.SearchInput} placeholder="Search" />
              </View>
            </View>
          </View>
          <Image
            style={styles.Filter}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYr6dtuIup6eMUGCpSpAAYp0tFJ0FNhcQNOQ&s",
            }}
          />
        </View>
        <Text style={styles.Categories}>Categories</Text>
        <FlatList
          horizontal
          data={categories}
          renderItem={({ item }) => (
            <View style={styles.CategoriesCard}>
              <View style={styles.Group7}>
                <Text style={styles.Exercise}>{item.title}</Text>
                <Text style={styles._12Tasks}>{item.tasks}</Text>
              </View>
              <Image
                style={styles.CategoryImage}
                source={{
                  uri: item.image,
                }}
              />
            </View>
          )}
          keyExtractor={item => item.id}
          style={styles.Group9}
        />
        <Text style={styles.OngoingTask}>Ongoing Task</Text>
        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <View style={styles.OngoingTasksCards}>
              <Text style={styles.TaskTitle}>{item.title}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
        />
        <Button title="Add Task" onPress={() => {}} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255, 192, 203, 1)",
  },
  Task: {
    flex: 1,
    backgroundColor: "rgba(255, 192, 203, 1)",
  },
  Frame1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  Group1: {
    flexDirection: "column",
  },
  Welcome: {
    color: "rgba(0,0,0,1)",
    fontSize: 32,
    lineHeight: 32,
    fontFamily: "Lato, sans-serif",
    fontWeight: "700",
  },
  _15TasksToday: {
    color: "rgba(0,0,0,1)",
    fontSize: 12,
    lineHeight: 12,
    fontFamily: "Lato, sans-serif",
    fontWeight: "500",
  },
  ProfileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  Search3: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  SearchBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(251,249,247,1)",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "rgba(251,249,247,1)",
    paddingHorizontal: 10,
  },
  Group6: {
    flexDirection: "row",
    alignItems: "center",
  },
  Group5: {
    flexDirection: "row",
    alignItems: "center",
  },
  MynauiSearch: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  SearchInput: {
    fontSize: 16,
    fontFamily: "Lato, sans-serif",
    fontWeight: "700",
    color: "rgba(0,0,0,1)",
  },
  Filter: {
    width: 24,
    height: 24,
  },
  Categories: {
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    lineHeight: 20,
    fontFamily: "Lato, sans-serif",
    fontWeight: "700",
    padding: 20,
  },
  Group9: {
    paddingHorizontal: 20,
  },
  CategoriesCard: {
    marginRight: 10,
    padding: 16,
    borderRadius: 15,
    backgroundColor: "rgba(251,249,247,1)",
    alignItems: 'center',
  },
  Group7: {
    paddingBottom: 2,
  },
  Exercise: {
    color: "rgba(0,0,0,1)",
    fontSize: 16,
    lineHeight: 16,
    fontFamily: "Lato, sans-serif",
    fontWeight: "700",
  },
  _12Tasks: {
    color: "rgba(0,0,0,1)",
    fontSize: 12,
    lineHeight: 12,
    fontFamily: "Lato, sans-serif",
    fontWeight: "400",
  },
  CategoryImage: {
    width: 151,
    height: 132,
    marginTop: 10,
  },
  OngoingTask: {
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    lineHeight: 20,
    fontFamily: "Lato, sans-serif",
    fontWeight: "700",
    padding: 20,
  },
  OngoingTasksCards: {
    padding: 20,
    margin: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "rgba(232,209,186,1)",
    backgroundColor: "rgba(251,249,247,1)",
  },
  TaskTitle: {
    color: "rgba(0,0,0,1)",
    fontSize: 16,
    lineHeight: 16,
    fontFamily: "Lato, sans-serif",
    fontWeight: "700",
  },
});