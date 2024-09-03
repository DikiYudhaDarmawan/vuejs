<script>
import Swal from 'sweetalert2';

export default {
  name: "FederalView",
  data() {
    return {
      items: [
        {
          name: "federal1",
        },
        {
        name:"federal2",
        }
      ],
    };
  },
  methods: {
    editItem(index) {
      alert(`Edit item at index ${index}`);
    },
    deleteItem(index) {
      // Add SweetAlert confirmation before deleting
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.items.splice(index, 1);
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
    },
  },
};
</script>

<template>
  <div>
    <h5>
      Federal
      <RouterLink to="/federal/create" class="btn btn-primary float-end">
        Add Federal
      </RouterLink>
      <br />
    </h5>
    <div class="card-body">
      <table class="table table-bordered">
        <thead style="background-color: #f2f2f2;">
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in items" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ item.name }}</td>
            <td>
              <div class="d-flex">
                <RouterLink to="/federal/edit" class="btn btn-primary btn-sm me-2">
                  Edit
                </RouterLink>
                <button @click="deleteItem(index)" class="btn btn-danger btn-sm">
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
        <tbody v-if="items.length === 0">
          <tr>
            <td colspan="4" class="text-center">
              Loading...
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
