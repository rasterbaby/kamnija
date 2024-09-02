document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('odds-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Gather odds data from form inputs
    const odds = {
      // Team A and Team B
      teamA: document.querySelector('input[name="odds_team_a"]').value,
      drawAB: document.querySelector('input[name="odds_draw_a_b"]').value,
      teamB: document.querySelector('input[name="odds_team_b"]').value,
      gameDateA: document.querySelector('input[name="game_date_a"]').value,
      kickoffTimeA: document.querySelector('input[name="kickoff_time_a"]').value,

      // Team C and Team D
      teamC: document.querySelector('input[name="odds_team_c"]').value,
      drawCD: document.querySelector('input[name="odds_draw_c_d"]').value,
      teamD: document.querySelector('input[name="odds_team_d"]').value,
      gameDateC: document.querySelector('input[name="game_date_c"]').value,
      kickoffTimeC: document.querySelector('input[name="kickoff_time_c"]').value,

      // Team E and Team F
      teamE: document.querySelector('input[name="odds_team_e"]').value,
      drawEF: document.querySelector('input[name="odds_draw_e_f"]').value,
      teamF: document.querySelector('input[name="odds_team_f"]').value,
      gameDateE: document.querySelector('input[name="game_date_e"]').value,
      kickoffTimeE: document.querySelector('input[name="kickoff_time_e"]').value,

      // Team G and Team H
      teamG: document.querySelector('input[name="odds_team_g"]').value,
      drawGH: document.querySelector('input[name="odds_draw_g_h"]').value,
      teamH: document.querySelector('input[name="odds_team_h"]').value,
      gameDateG: document.querySelector('input[name="game_date_g"]').value,
      kickoffTimeG: document.querySelector('input[name="kickoff_time_g"]').value,

      // Team I and Team J
      teamI: document.querySelector('input[name="odds_team_i"]').value,
      drawIJ: document.querySelector('input[name="odds_draw_i_j"]').value,
      teamJ: document.querySelector('input[name="odds_team_j"]').value,
      gameDateI: document.querySelector('input[name="game_date_i"]').value,
      kickoffTimeI: document.querySelector('input[name="kickoff_time_i"]').value,

      // Team K and Team L
      teamK: document.querySelector('input[name="odds_team_k"]').value,
      drawKL: document.querySelector('input[name="odds_draw_k_l"]').value,
      teamL: document.querySelector('input[name="odds_team_l"]').value,
      gameDateK: document.querySelector('input[name="game_date_k"]').value,
      kickoffTimeK: document.querySelector('input[name="kickoff_time_k"]').value
    };

    // Log the odds data to verify
    console.log('Odds:', odds);

    // Store odds data in localStorage
    try {
      localStorage.setItem('matchOdds', JSON.stringify(odds));
      alert('Odds have been saved!');
    } catch (error) {
      console.error('Error saving odds to localStorage:', error);
      alert('Error saving odds. Please try again.');
    }
  });
});
