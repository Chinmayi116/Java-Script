<!DOCTYPE html>
<html>
<head>
    <title>Student Registration Form</title>
</head>

<body>

<center>
    <h2>Student Registration Form</h2>

    <form>
        <table border="1" cellpadding="10">

            <tr>
                <td>First Name :</td>
                <td>
                    <input type="text" name="fname">
                </td>

                <td>Last Name :</td>
                <td>
                    <input type="text" name="lname">
                </td>
            </tr>

            <tr>
                <td>DOB :</td>
                <td>
                    <input type="date" name="dob">
                </td>

                <td>Age :</td>
                <td>
                    <input type="number" name="age">
                </td>
            </tr>

            <tr>
                <td>Gender :</td>
                <td colspan="3">
                    <input type="radio" name="gender"> Female
                    <input type="radio" name="gender"> Male
                </td>
            </tr>

            <tr>
                <td>Email :</td>
                <td colspan="3">
                    <input type="email" name="email" size="50">
                </td>
            </tr>

            <tr>
                <td>Position Available :</td>
                <td colspan="3">
                    <select>
                        <option>MCA</option>
                        <option>BCA</option>
                        <option>BSc</option>
                        <option>BCom</option>
                    </select>
                </td>
            </tr>

            <tr>
                <td>Subjects :</td>
                <td colspan="3">
                    <input type="checkbox"> Java
                    <input type="checkbox"> Python
                    <input type="checkbox"> Cloud
                </td>
            </tr>

            <tr>
                <td colspan="4" align="center">
                    <input type="submit" value="Submit">
                    <input type="reset" value="Reset">
                </td>
            </tr>

        </table>
    </form>
</center>

</body>
</html>
