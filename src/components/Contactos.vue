<template>
  <section class="src-components-contactos">
    <div class="jumbotron mt-3">
      <table class="table">
        <tr class="bg-success text-white">
          <th>Id</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Edad</th>
          <th>Direccion</th>
          <th>Mail</th>
          <th>Telefono</th>
        </tr>

        <tr
          class="bg-info text-white"
          v-for="(contacto,index) in this.$store.state.contactos"
          :key="index"
        >
          <td>{{index+1}}</td>
          <td>{{ contacto.nombre | versalita }}</td>
          <td>{{ contacto.apellido | versalita }}</td>
          <td>{{ contacto.edad }}</td>
          <td>{{ contacto.direccion}}</td>
          <td>{{ contacto.email }}</td>
          <td>{{ contacto.telefono? 'Si':'No' }}</td>
        </tr>
      </table>
    </div>
  </section>
</template>

<script lang="js">

import { urlContactos } from '../urls'

  export default  {
    name: 'src-components-contactos',
    props: [],
    mounted () {
      this.recuperarContactos()
    },
    data () {
      return {
      }
    },
    methods: {
            recuperarContactos(){
        this.axios.get(urlContactos)
          .then( res => {
            this.$store.dispatch('getContactos', res.data)
          })
          .catch(error => {
            console.log('ERROR GET HTTP', error)
          })
            }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
.src-components-contactos {
}
</style>
