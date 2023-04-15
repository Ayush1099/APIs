const express=require('express');
const routing=express.Router();
const controller=require('../Controller/UserController');

/** 
 * @swagger 
 * /registerUser: 
 *   post: 
 *     summary: API to add new notes.
 *     description: Creates a new notes by inserting new notes data to the database. 
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 description: Name of the person
 *                 type: String  
 *                 example: Ayush
 *               emailId:
 *                 description: Email Id of the person
 *                 type: String
 *                 example: aaa@gmail.com
 *               phoneNo:
 *                 description: Phone Number of the person
 *                 type: Integer
 *                 example: 9822386530
 *     responses:  
 *       200: 
 *         description: Date Registered Successfully  
 */ 
routing.post('/registerUser',controller.RegisterUser)

/** 
 * @swagger 
 * /getUser/{userId}: 
 *   get: 
 *     summary: API to update existing notes..
 *     description: Updates notes data to the database. 
 *     parameters: 
 *     - in: path
 *       name: userId 
 *       description: UserId to retrieve the user
 *       required: true 
 *       type: Number 
 *       example: 578
 *     responses:  
 *       200: 
 *         description: Success  
 *         schema:
 *              type: object
 *              example:
 *                  userId:578
 *                  name:ggg
 *                  emailId:ggg@gmail.com
 *                  phoneNo:9822386530
 */
routing.get('/getUser/:userId',controller.GetUser)

module.exports = routing;