<template>
 <div class="u-hidden">
  <div class="u-wrapper" id="bingo_template">
    <table class="Bingo">
      <thead>
        <tr>
          <th class="Bingo-letter">L</th>
          <th class="Bingo-letter">I</th>
          <th class="Bingo-letter">N</th>
          <th class="Bingo-letter">G</th>
          <th class="Bingo-letter">O</th>
        </tr>
      </thead>
      <tbody class="Bingo-set">
        <tr>
          <td class="Bingo-cell"></td>
          <td class="Bingo-cell"></td>
          <td class="Bingo-cell"></td>
          <td class="Bingo-cell"></td>
          <td class="Bingo-cell"></td>
        </tr>
        <tr>
          <td class="Bingo-cell"></td>
          <td class="Bingo-cell"></td>
          <td class="Bingo-cell"></td>
          <td class="Bingo-cell"></td>
          <td class="Bingo-cell"></td>
        </tr>
        <tr>
          <td class="Bingo-cell"></td>
          <td class="Bingo-cell"></td>
          <td class="Bingo-cell Bingo-cell--star">*</td>
          <td class="Bingo-cell"></td>
          <td class="Bingo-cell"></td>
        </tr>
        <tr>
          <td class="Bingo-cell"></td>
          <td class="Bingo-cell"></td>
          <td class="Bingo-cell"></td>
          <td class="Bingo-cell"></td>
          <td class="Bingo-cell"></td>
        </tr>
        <tr>
          <td class="Bingo-cell"></td>
          <td class="Bingo-cell"></td>
          <td class="Bingo-cell"></td>
          <td class="Bingo-cell"></td>
          <td class="Bingo-cell"></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div id="debug_area"></div>

<div id="bingo_area"></div>


</template>

<script>
export default {
  name: 'SetGrid
  ',
  props: {

  }
}
</script>
