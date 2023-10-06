<script setup>
  import {ref, onMounted} from 'vue';

  const itemsPerPage = ref(5);
  const loading = ref(true);

  const headers = [
    {
      title: 'Product Name',
      align: 'start',
      sortable: false,
      key: 'title',
    },
    { title: 'Category', align: 'end', key: 'category' },
    { title: 'Price', align: 'end', key: 'price' },
    { title: 'Rating', align: 'end', key: 'rating' },
    { title: 'Stock', align: 'end', key: 'stock' },
    { title: 'Image', align: 'end', key: 'thumbnail' },
    { title: 'Action', align: 'end', key: 'action' },
  ];

  const products = ref([]);

  onMounted(async () => {
    const res = await fetch('https://dummyjson.com/products')
    .then(res => res.json());

    products.value = res.products;
    loading.value = false;
  });

  const  breadcumbs =  [
    {
      title: 'Dashboard',
      disabled: false,
      href: '/dashboard',
    },
    {
      title: 'Product',
      disabled: false,
      href: '/product',
    },
    {
      title: 'List',
      disabled: true,
      href: '/product/list',
    },
  ];

</script>
<template>
  <v-card color="secondary">
    <v-breadcrumbs
      :items="breadcumbs"
      divider="/"
    >
      <template v-slot:prepend>
        <v-icon size="small" icon="mdi mdi-view-dashboard"></v-icon>
      </template>
    </v-breadcrumbs>
  </v-card>
  <br>
  <v-btn href="/product/create" prepend-icon="mdi mdi-plus">
    Add New Product
  </v-btn>

  <br>

  <v-data-table
    v-model:items-per-page="itemsPerPage"
    :headers="headers"
    :items="products"
    item-value="name"
    class="elevation-1"
    :loading = "loading"
    loading-text="loading...Please wait..."
  >
  <template v-slot:item="{ item }">
    <tr>
      <td style="text-align:left;">{{ item.title }}</td>
      <td style="text-align:left;">{{ item.category }}</td>
      <td>{{ item.price }}</td>
      <td>{{ item.rating }}</td>
      <td>{{ item.stock }}</td>
      <td><v-img :width="30" aspect-ratio="16/9" cover :src="item.thumbnail"></v-img></td>
      <td>
        <v-btn size="small" title="Details" density="comfortable" prepend-icon="mdi mdi-information">View</v-btn>
        <v-btn size="small" title="Edit" density="comfortable" prepend-icon="mdi mdi-pencil-outline">Edit</v-btn>
        <v-btn size="small" title="Delete" density="comfortable" prepend-icon="mdi mdi-trash-can">Delete</v-btn>
      </td>
    </tr>
  </template>
</v-data-table>
</template>
