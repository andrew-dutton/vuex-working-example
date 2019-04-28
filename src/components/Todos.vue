<template>
  <div>
    <h3>Todos</h3>
    <div class="todos">
      {{ allTodos }}
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: "Todos",
  computed: mapGetters(['allTodos']),
  methods: mapActions(['fetchTodos']),
  created() {
    this.fetchTodos()
  }
}
</script>

<style>

</style>
