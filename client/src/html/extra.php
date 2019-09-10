 <?php
       $dbconn = pg_connect("host=ec2-23-21-156-171.compute-1.amazonaws.com port=5432 dbname=daff54nelb3ps6 user=leeglxtkajgvtl password=76f29beea03eb3bd5b69672f0d292a01ae95d251957282df96e882864c969e50");
       $sql = "SELECT email,lastname FROM webrtc.contact";
                            $resultset = pg_query($dbconn, $sql);
                            while($row = pg_fetch_array($resultset)) {
                                echo '<tr>
                                        <td>'.$row[0].'</td>
                                        <td>'.$row[1].'</td>
                                        <td>'.$row[2].'</td>
                                    </tr>'; 
                            }
                            pg_close($dbconn);
                        ?>       
