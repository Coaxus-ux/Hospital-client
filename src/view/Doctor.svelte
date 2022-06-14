<script>
    import { onMount } from "svelte";
    import { loggedValidator} from "../lib/loggedValidator";
    onMount(async () => {
      await loggedValidator();
    });
  </script>