<template>
  <div class="hello">
    <ul id="example-1">
      <li v-for="male in males">
        {{ male.name }}
      </li>
    </ul>
    <ul id="example-2">
      <li v-for="female in females">
        {{ female.name }}
      </li>
    </ul>
  </div>
</template>

<script>
const APIURL = "http://agl-developer-test.azurewebsites.net/people.json";
const APIDATA = [];
var catOwners = {
  init: function () {
    return Promise.resolve()
        .then(this.fetchData)
        .then(data => this.processData(data)) 
        .catch(function(error) {
            console.log(error);
        })
        .then(data => { 
          console.log(data)
           APIDATA = data
          })
  },

  fetchData: function () {
    return window.fetch(APIURL)
        .then((response) => {return response.json()})
        .catch(function(error) {
            console.log(error);
    })
  },

  processData: function (data) {
    if (data == undefined) return;
        var sortedCatsList = {
            "male" : this.getAllCats(data.filter(subitem => subitem.gender === 'Male')),
            "female" : this.getAllCats(data.filter(subitem => subitem.gender === 'Female'))
        }
    return sortedCatsList;
  },

  getAllCats: function (filtereddata) {
    if (filtereddata == undefined) return [];
        var sortList = [];
        filtereddata.map(item => {
          var catArr =  (item.pets || []).filter(pet => pet.type === 'Cat');
          catArr.map(cat => {
               sortList.push(cat);
           });
        })
    return sortList.sort(function(a,b) {return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);} );
  }

}


export default {
  name: 'hello',
  mounted() {
    console.log("mounted")
    this.fetchData()
  },
  methods: {
    fetchData: function() {
      console.log("fetchData")
      var self = this;
      debugger;

       this.$http.get(APIURL).then(response => {
            console.log(response);
            //this.getTemp = response.data
            // or like this this.getTemp = response.json()
        })

    },
    processData: function(data) {
      
      var self = this;
      if (data == undefined) return;
        var sortedCatsList = {
            "male" : self.getAllCats(data.filter(subitem => subitem.gender === 'Male')),
            "female" : self.getAllCats(data.filter(subitem => subitem.gender === 'Female'))
        }
        this.females = sortedCatsList.female;
        this.males = sortedCatsList.male;
      
    },
    getAllCats: function(filtereddata){
      console.log("getAllCats")
      if (filtereddata == undefined) return [];
        var sortList = [];
        filtereddata.map(item => {
          var catArr =  (item.pets || []).filter(pet => pet.type === 'Cat');
          catArr.map(cat => {
               sortList.push(cat);
           });
        })
      return sortList.sort(function(a,b) {return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);} );
    }
  },
  watch: {
    watchMe: function() {
      console.log("watch");
      this.fetchData();
    }
  },
  data() {
    console.log("data")
    return {
      watchMe: "",
      females: [],
      males: []
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
