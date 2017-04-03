<template>
  <div class="cats">
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


export default {
  name: 'hello',
  mounted() {
    console.log("mounted")
    this.fetchData()
  },
  methods: {
    fetchData: function() {
      var self = this;
      console.log("fetchData")
      return window.fetch(APIURL)
        .then(response=> response.json())
        .then(responsejson => {
          self.processData(responsejson);
        })
        .catch(function(error) {
            console.log(error);
        })

    },
    processData: function(data) {
      console.log(data)
      console.log("processdata")
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
  created() {
    console.log("data")
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
div.cats {
  margin: 3em;
  width: 30em;
}

ul {
    counter-reset: li;
    list-style: none;
    font: 15px 'trebuchet MS', 'lucida sans';
    padding: 0;
    margin-bottom: 4em;
}

li {
    display: list-item;
    text-align: -webkit-match-parent;
    position: relative;
    display: block;
    padding: .4em .4em .4em 2em;
    margin: .5em 0;
    margin-left: 1em;
    background: #FFF;
    color: #444;
    text-decoration: none;
    -moz-border-radius: .3em;
    -webkit-border-radius: .3em;
    border-radius: .3em;
}

li:before {
    content: counter(li);
    counter-increment: li;
    position: absolute;
    left: -1.3em;
    top: 50%;
    margin-top: -1.3em;
    background: #87ceeb;
    height: 2em;
    width: 2em;
    line-height: 2em;
    border: .3em solid #fff;
    text-align: center;
    font-weight: bold;
    -moz-border-radius: 2em;
    -webkit-border-radius: 2em;
    border-radius: 2em;
    color: #FFF;
}
</style>
