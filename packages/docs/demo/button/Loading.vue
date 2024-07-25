<template>
  <div>
    <xy-button type="primary" loading>Loading</xy-button>
    <xy-button type="primary" loading-icon="circle-notch" loading
    >Loading</xy-button
    >
    <xy-button type="primary" loading>
      <template #loading>
        <xy-icon style="margin-right: 6px" icon="star" spin />
      </template>
      Loading
    </xy-button>
  </div>
</template>
