<script setup lang="ts">
import { FilterOperator } from '@/types/Filter';
import { Filter } from '@/types/Filter';

const pokemons = usePokemonList().list;
interface Operator {
  filterKey: string,
  value: FilterOperator
}
let editingOperators: Operator[] = [
  { filterKey: 'attack', value: FilterOperator.GreaterThanOrEquals },
  { filterKey: 'defense', value: FilterOperator.GreaterThanOrEquals },
  { filterKey: 'speed', value: FilterOperator.GreaterThanOrEquals },
  { filterKey: 'hp', value: FilterOperator.GreaterThanOrEquals }
];
const filterSettings = usePokemonFilter().settings;
const operators = [
  { key: FilterOperator.GreaterThanOrEquals , value: '>='},
  { key: FilterOperator.LessThanOrEquals , value: '<='},
  { key: FilterOperator.Equals , value: '='},
];
const filterValueChange = (key: string, event: any) => {
  let setting = filter(key);
  const found = !!setting;
  if(!found) {
    setting = { key } as Filter;
    // filterSettings.value.push(setting);
    filterSettings.push(setting);
  }
  switch(key) {
    case 'name':
    case 'japanese_name':
      if(event.target.value) {
        setting.operator = FilterOperator.Contains
        setting.value = event.target.value;
      } else if(found) {
        // filterSettings.value = filterSettings.value.filter(s => s.key !== key);
        filterSettings.length = 0;
        filterSettings.push(...filterSettings.filter(s => s.key !== key));
      }
      break;
    case 'attack':
    case 'defense':
    case 'speed':
    case 'hp':
      if(event.target.value) {
        setting.operator = editingOperators.find(o => o.filterKey === key).value;
        setting.value = parseInt(event.target.value);
      } else if(found) {
        // filterSettings.value = filterSettings.value.filter(s => s.key !== key);
        filterSettings.length = 0;
        filterSettings.push(...filterSettings.filter(s => s.key !== key));
      }
      break;
    case 'classfication':
    if(event.target.value) {
        setting.operator = FilterOperator.Equals;
        setting.value = event.target.value;
      } else if(found) {
        filterSettings.length = 0;
        filterSettings.push(...filterSettings.filter(s => s.key !== key));
      }
      break;
    case 'is_legendary':
      break;
  }
}
// const filter =  (key: string) => filterSettings.value.find(s => s.key === key);
const filter =  (key: string) => filterSettings.find(s => s.key === key);
const filterOperator = (key: string) => filter(key)?.operator;
const filterValue = (key: string) => filter(key)?.value;
const filterOperatorChange = (key:string, event: any) => {
  const option = event.target.selectedOptions[0];
  let operator = editingOperators.find(o => o.filterKey === key);
  if(operator) {
    operator.value = parseInt(option.value);
  } else {
    operator = { filterKey: key, value: option.value};
    editingOperators.push(operator);
  }
  const setting = filter(key);
  if(setting) {
    setting.operator = operator.value;
  }
};
const classifications = [''];
// classifications.push(...[...new Set(pokemons.value.map(p => p.classfication))]);
classifications.push(...[...new Set(pokemons.map(p => p.classfication))]);
classifications.sort((a, b) => a > b ? 1 : -1);
</script>

<template>
  <div class="filter-row">
    <div>
      Name:
      <input type="text" @input="filterValueChange('name', $event as InputEvent)" :value="filterValue('name')" size="15" maxlength="15"/>
    </div>
    <div>
      Japanese name:
      <input type="text" @input="filterValueChange('japanese_name', $event as InputEvent)" :value="filterValue('japanese_name')" size="15" maxlength="15"/>
    </div>
    <div>
      Attack:
      <select @input="filterOperatorChange('attack', $event)">
        <option v-for="operator in operators" :key="operator.key" :selected="filterOperator('attack') === operator.key" :value="operator.key">{{ operator.value }}</option>
      </select>
      <input type="number" @input="filterValueChange('attack', $event as InputEvent)" :value="filterValue('attack')" size="3" maxlength="3" min="0" max="100"/>
    </div>
    <div>
      Defense:
      <select @input="filterOperatorChange('defense', $event)">
        <option v-for="operator in operators" :key="operator.key" :selected="filterOperator('defense') === operator.key" :value="operator.key">{{ operator.value }}</option>
      </select>
      <input type="number" @input="filterValueChange('defense', $event as InputEvent)" :value="filterValue('defense')" size="3" maxlength="3" min="0" max="100" />
    </div>
    <div>
      Speed:
      <select @input="filterOperatorChange('speed', $event)">
        <option v-for="operator in operators" :key="operator.key" :selected="filterOperator('speed') === operator.key" :value="operator.key">{{ operator.value }}</option>
      </select>
      <input type="number" @input="filterValueChange('speed', $event as InputEvent)" :value="filterValue('speed')" size="3" maxlength="3" min="0" max="100" />
    </div>
    <div>
      HP:
      <select @input="filterOperatorChange('hp', $event)">
        <option v-for="operator in operators" :key="operator.key" :selected="filterOperator('hp') === operator.key" :value="operator.key">{{ operator.value }}</option>
      </select>
      <input type="number" @input="filterValueChange('hp', $event as InputEvent)" :value="filterValue('hp')" size="3" maxlength="3" min="0" max="100" />
    </div>
    <div>
      Classification:
      <select @input="filterValueChange('classfication', $event)">
        <option v-for="classification in classifications" :key="classification" :selected="filterValue('classfication') === classification">{{ classification }}</option>
      </select>
    </div>
  </div>
</template>

<style scoped>
.filter-row {
  margin: 8px;
  display: flex;
  flex-direction: row;
  gap: 1em;
  /* justify-content: ; */
  height: 1.5rem;}
</style>