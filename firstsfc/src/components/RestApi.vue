<template>
<div>
  <h2>JSONPlaceholder API Demo</h2>

  <div v-if="loading">Loading...</div>
  <div v-if="error">{{ error }}</div>

  <h3>Posts</h3>
  <ul>
    <li v-for="post in posts" :key="post.id">
      {{ post.title }} (ID: {{ post.id }})
      <button @click="editPost(post)">Edit</button>
      <button @click="deletePost(post.id)">Delete</button>
    </li>
  </ul>

  <h3>Add New Post</h3>
  <form @submit.prevent="addPost">
    <input type="text" v-model="newPost.title" placeholder="Title" required><br>
    <textarea v-model="newPost.body" placeholder="Body" required></textarea><br>
    <button type="submit">Add Post</button>
  </form>

  <div v-if="editingPost">
    <h3>Edit Post</h3>
    <form @submit.prevent="updatePost">
      <input type="text" v-model="editPostData.title" placeholder="Title" required><br>
      <textarea v-model="editPostData.body" placeholder="Body" required></textarea><br>
      <button type="submit">Update Post</button>
      <button type="button" @click="cancelEdit">Cancel</button>
    </form>
  </div>
</div>
</template>
  
<script setup>
import { ref, reactive, onMounted } from 'vue';
import axios from 'axios';

const posts = ref([]);
const loading = ref(false);
const error = ref(null);
const newPost = reactive({ title: '', body: '' });
const editingPost = ref(false);
const editPostData = reactive({ title: '', body: '', id: null });
const selectedPost = ref(null);

const fetchPosts = async () => {
  loading.value = true;
  error.value = null;
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    posts.value = response.data;
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};

const addPost = async () => {
  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);
    posts.value.push(response.data);
    newPost.title = '';
    newPost.body = '';
  } catch (err) {
    error.value = err.message;
  }
};

const deletePost = async (id) => {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    posts.value = posts.value.filter(post => post.id !== id);
  } catch (err) {
    error.value = err.message;
  }
};

const editPost = (post) => {
  editingPost.value = true;
  editPostData.title = post.title;
  editPostData.body = post.body;
  editPostData.id = post.id;
  selectedPost.value = post;
};

const updatePost = async () => {
  try {
    const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${editPostData.id}`, editPostData);
    
    const index = posts.value.findIndex(p => p.id === editPostData.id);
    if (index !== -1) {
      posts.value[index] = response.data;
    }

    editingPost.value = false;
    selectedPost.value = null;
  } catch (err) {
    error.value = err.message;
  }
};

const cancelEdit = () => {
  editingPost.value = false;
  editPostData.title = '';
  editPostData.body = '';
  editPostData.id = null;
  selectedPost.value = null;
};

onMounted(fetchPosts);
</script>