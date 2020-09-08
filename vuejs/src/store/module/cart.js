const state = {
  listmua: [],
  sl:0
};
const getters = {
  listmua: s => {
    return s.listmua;
  },
  sl: s => {
    var count=0
    for(var x of s.listmua){
        count+=x.slItem
    }
    return count
  }
};
const mutations = {
  buyitem: (s, i) => {
    var temp = s.listmua.find(x => {
      return x.id == i.id;
    });
    if (typeof temp != "undefined") {
      for (var x = 0; x < s.listmua.length; x++) {
        if (s.listmua[x].id == temp.id) {
          s.listmua[x].slItem ++;
          console.log(s.listmua[x].slItem);
        }
      }
    } else {
      var t = i;
      t.slItem = 1;
      s.listmua.push(t);
    }
  }
};
const actions = {
  buyitem: ({ commit }, i) => {
    var x = confirm("Bạn có chắc mua "+i.name+ " ?")
    if(x)
    commit("buyitem", i);
  }
};
export default {
  state,
  getters,
  mutations,
  actions
};
