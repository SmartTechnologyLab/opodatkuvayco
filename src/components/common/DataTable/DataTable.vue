<script setup lang="ts">
import DataTable, { type DataTableCellEditCompleteEvent } from 'primevue/datatable'
import Column from 'primevue/column'
import Card from 'primevue/card'
import { isNil, path } from 'ramda'
import { useI18n } from 'vue-i18n'
import { computed, useAttrs, useSlots, type Ref } from 'vue'
import { type Deal } from '@/components/common/DataTable/mocks'
import type { Currencies, Table } from '@/components/common/DataTable/types'
import UiInput from '@/components/common/UiInput/UiInput.vue'
import { calendarFields, currencyFields, numberFields } from '@/components/common/DataTable/constants/fieldsList'
import UiNumberInput from '../UiNumberInput/UiNumberInput.vue'
import UiCalendar from '../UiCalendar/UiCalendar.vue'
import { DateFormat } from '../UiCalendar/types'
import { Currency, currenciesSymbols } from '@/constants/currencies'
import { currenciesName, FormatType, dynamicCurrencies } from '@/components/common/DataTable/constants'

const props = defineProps<{
  table: Table
  notEditableColumns?: string[]
  editMode?: 'cell' | 'row' | undefined
  currency?: Currency
  highLightedCells?: Record<number, unknown[]>
}>()

defineEmits<{
  (e: 'onCellEdit', event: DataTableCellEditCompleteEvent): void
}>()

const { d, n } = useI18n()

const attrs = useAttrs()

const slots = useSlots()

const { t } = useI18n()

const currencyType = computed(() => currenciesName[props.currency as Currencies])

const getFormattedData = (data: Ref<Deal[]>, field: string, type?: FormatType) => {
  const value = path(field.split('.'), data)

  const [formatted] = [
    type === FormatType.Date && d(value),
    type === FormatType.Number && n(value),
    type === FormatType.CurrencyUSD && n(value, { style: 'currency', currency: props.currency || Currency.EUR }),
    type === FormatType.CurrencyUAH && n(value, { style: 'currency', currency: Currency.UAH }),
    type === FormatType.Percent && n(value, 'percent'),
    value
  ].filter(Boolean)

  return formatted
}

const isColumnsEditable = (notEditableColumns: string[] | undefined, field: string) => {
  return !notEditableColumns?.includes(field)
}

const tableCurrency = (currency: FormatType) => {
  if (currency === FormatType.CurrencyUAH) {
    return currenciesSymbols[Currency.UAH]
  }

  return dynamicCurrencies.includes(currency) ? currenciesSymbols[props.currency as Currency] : ''
}

const isCellShouldBeMarked = (field: string, index: number) => {
  return props?.highLightedCells && props?.highLightedCells[index] && props.highLightedCells[index].includes(field)
}

const maxDate = new Date()
</script>

<template>
  <Card class="data-table">
    <template #title>
      <slot name="header" />
    </template>

    <template #content>
      <DataTable v-bind="{ ...attrs }" :value="table.data" @cell-edit-complete="$emit('onCellEdit', $event)" :editMode>
        <Column v-if="slots.deleteRow">
          <template #body="{ index }">
            <slot name="deleteRow" :index="index" />
          </template>
        </Column>

        <Column
          v-for="{ field, header, type, sortable } in table.headers"
          :sortable
          :key="field"
          :field
          :header="`${t(header)} ${tableCurrency(type as FormatType)}`"
        >
          <template #body="{ data, field, index }">
            <div
              :key="index"
              :class="{
                'data-table__marked-cell': isCellShouldBeMarked(field, index),
                'data-table__unmarked-cell': !isCellShouldBeMarked(field, index)
              }"
            >
              <slot :name="field" :value="path(field.split('.'), data)" :type="type" :field :index>
                {{ isNil(type) ? path(field.split('.'), data) || '-' : getFormattedData(data, field, type) }}
              </slot>
            </div>
          </template>

          <template #editor="{ data, field }" v-if="isColumnsEditable(notEditableColumns, field)">
            <template v-if="calendarFields.includes(field)">
              <UiCalendar v-model="data[field]" :dateFormat="DateFormat.DOTTED" :maxDate />
            </template>
            <template v-else-if="currencyFields.includes(field)">
              <UiNumberInput v-model="data[field]" mode="currency" :currency="currencyType" />
            </template>
            <template v-else-if="numberFields.includes(field)">
              <UiNumberInput v-model="data[field]" />
            </template>

            <template v-else>
              <UiInput v-model="data[field]" />
            </template>
          </template>
        </Column>

        <template #empty>{{ t('table.empty') }}</template>
      </DataTable>
      <slot name="addRow" />
    </template>
  </Card>
</template>

<style scoped lang="scss"></style>
