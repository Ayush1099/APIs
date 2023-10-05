const express=require('express');
const routing=express.Router();
const controller=require('../Controller/UserController');

/** 
 * @swagger 
 * /registerUser: 
 *   post: 
 *     summary: Registers new User by inserting request data in MongoDB.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 description: Name of the person
 *                 type: string  
 *                 example: ddd
 *               emailId:
 *                 description: Email Id of the person
 *                 type: string
 *                 example: ddd@gmail.com
 *               phoneNo:
 *                 description: Phone Number of the person
 *                 type: string
 *                 format: phone
 *                 example: 9822386530
 *     responses:  
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 data:
 *                   type: string
 *                 userId:
 *                   type: string
 *       400:
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       Name:
 *                         type: string
 *                       Phone Number:
 *                         type: string
 *                       Email ID:
 *                         type: string
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */ 
routing.post('/registerUser',controller.RegisterUser)

/** 
 * @swagger 
 * /getUser/{userId}: 
 *   get: 
 *     summary: Fetches User Details from MongoDB as per userId provided. 
 *     parameters: 
 *     - name: userId 
 *       in: path
 *       description: UserId to retrieve the user
 *       required: true 
 *       schema:
 *          type: integer 
 *          example: 578
 *     responses:  
 *       200: 
 *         description: Success  
 *         content:
 *              application/json:
 *                  schema:
 *                     type: object
 *                     properties:
 *                         status:
 *                           type: string
 *                         data:
 *                           type: array
 *                           items:
 *                             type: object
 *                             properties:       
 *                                userId:
 *                                   type: string
 *                                name:
 *                                   type: string
 *                                emailId:
 *                                   type: string
 *                                phoneNo:
 *                                   type: string
 *       400:
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       User ID:
 *                         type: string
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       404:
 *         description: Not Found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
routing.get('/getUser/:userId',controller.GetUser)

module.exports = routing;