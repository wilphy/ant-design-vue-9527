<template>
  <div>
    <Chart :option="chartOption" style="height: 400px" />
  </div>
</template>

<script>
import requset from "../../utils/request.js";
import Chart from "../../components/Chart";

export default {
  data() {
    return {
      chartOption: {}
    };
  },
  mounted() {
    this.getChartData();
    this.interal = setInterval(() => {
      this.getChartData();
    }, 3000);
  },
  methods: {
    getChartData() {
      requset({
        url: "/api/dashboard/chart",
        method: "GET",
        params: { ID: 123456 }
      }).then(response => {
        this.chartOption = {
          title: {
            text: "各类服饰销量"
          },
          tooltip: {},
          xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
          },
          yAxis: {},
          series: [
            {
              name: "销量",
              type: "bar",
              data: response.data
            }
          ]
        };
      });
    }
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  components: {
    Chart
  }
};
</script>

<style></style>
